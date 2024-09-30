import { IsDate, IsEmail, IsEnum, IsInt, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto  {
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Length(2, 10)
    username: string;

    @IsEmail()
    email:  string;

    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsEnum(['user', 'admin', 'hr'], { message: 'invalid user'})
    role: string;

    @IsDate()
    created_at: string;

}