import { GetArrayValues } from '../../utils';
import { Attribute } from './base';

export interface EnumerationAttribute<T extends string[] = []> extends Attribute<'enumeration'> {
  enum: T;
}

export type EnumerationValue<T extends string[]> = GetArrayValues<T>;

export type GetEnumerationAttributeValue<T extends Attribute> = T extends EnumerationAttribute<
  infer U
>
  ? EnumerationValue<U>
  : never;