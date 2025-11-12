
export class ResponseDto<T> {
  private constructor(
    public data: T | T[],
    public message: string,
    public success: boolean = true
  ) {}

  public static create<T>(data: T | T[], message: string = 'Success'): ResponseDto<T> {
    return new this(data,message);
  }
}