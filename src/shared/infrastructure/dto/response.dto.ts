
export class ResponseDto<T> {
  private constructor(
    public data: T | T[],
    public message: string
  ) {}

  public static create<T>({
    data,
    message
  }: {
    data: T | T[],
    message: string
  }): ResponseDto<T> {
    return new this(
      data,
      message
    )
  }
}