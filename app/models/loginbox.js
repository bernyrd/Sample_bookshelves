import Model from '@ember-data/model';

export default class LoginboxModel extends Model {
    @attr('String')name;
    @attr('String')pass;

    get pressed(){
        return `${this.name} ${this.pass}`;
    }
}
