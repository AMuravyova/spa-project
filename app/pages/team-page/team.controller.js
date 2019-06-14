/**
 * Created by amurav on 19.04.2017.
 */

export class TeamController {
    constructor(usersService){
        this.usersService = usersService;
        this.currentUser = this.usersService.getUser();
    }

    getCurrentUser(){
        return this.currentUser;
    }
}