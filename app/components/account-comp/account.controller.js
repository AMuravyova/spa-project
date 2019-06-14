/**
 * Created by amurav on 13.04.2017.
 */
export class AccountController {
    constructor(usersService) {
        this.usersService = usersService;
        this.currentUser = this.usersService.getUser();
    }

    getCurrentUser () {
        return this.currentUser;
    }
}