import { UserEntity } from ".";

export type PartialUserEntity = Partial<UserEntity> & {profilePic?: string | File | null}