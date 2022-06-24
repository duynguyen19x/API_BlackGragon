class User{
    constructor (Id, Code, Name, Addres, GenderId, PhoneNumber, Password, UserType){
        this.Id = Id,
        this.Code = Code,
        this.Name = Name,
        this.Addres = Addres,
        this.GenderId = GenderId,
        this.PhoneNumber = PhoneNumber,
        this.Password = Password,
        this.UserType = UserType
    }
}

module.exports = User;