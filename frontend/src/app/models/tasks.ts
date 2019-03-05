export class Tasks {

    constructor( _id="", title="", description ="", status= false){
        this._id = _id;
        this.title = title;
        this.description = description;
        this.status = status
    }
    _id: string;
    title: string;
    description: string;
    status: boolean;

}
