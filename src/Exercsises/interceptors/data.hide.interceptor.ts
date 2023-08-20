import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { ExercsisesService } from '../exercsises.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export function serialize(dto: any) {
  return UseInterceptors(new dataSerializer(dto));
}

export class dataSerializer implements NestInterceptor {
  constructor(private DTO: any) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        return plainToClass(this.DTO, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
