import { ResolveReference, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../../entities';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.userService.findOne(reference.id);
  }
}
