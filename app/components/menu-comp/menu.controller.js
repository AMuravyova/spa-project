/**
 * Created by amurav on 18.04.2017.
 */
export class MenuController {
    constructor(usersService) {
        this.usersService = usersService;
        this.currentUser = this.usersService.getUser();
    }

    getCurrentUser () {
        return this.currentUser;
    }
}