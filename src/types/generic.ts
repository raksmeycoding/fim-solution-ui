// GenericDto wrapper type
export interface GenericDtoBody<T> {
  requestId?: string;
  message?: string;
  code?: string;
  data: T;
}

// GenericDto wrapper type
export interface GenericDtoResult<T> {
  requestId?: string;
  message?: string;
  code?: string;
  data: T;
}
