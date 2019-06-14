/**
 * Created by amurav on 13.04.2017.
 */

export class UserController {
    constructor(usersService, Restangular){
        this.user = {
            firstName: 'userName',
            lastName: 'userLastName',
            team: 'userTeam',
            password: 'userPassword',
            email: 'email',
            title: 'title',
            description: 'desc',
            type: 'type',
            data: 'data'
        };

        this.usersService = usersService;
    }
}