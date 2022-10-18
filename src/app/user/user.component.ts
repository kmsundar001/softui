import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public name: any;
  public nameFlag: boolean = true;
  public email: any;
  public emailFlag: boolean = false;
  public phone: any;
  public phoneFlag: boolean = false;
  public address: any;
  public addressFlag: boolean = false;
  public previousCount: any = 0;
  public lastInsteredID:any = 0;
  public addFlag:boolean = false;
  public userArray:any = []
  constructor() { }
  ngOnInit(): void {
  }
  checkValidation(number: any) {
    this.nameFlag = false; this.emailFlag = false; this.phoneFlag = false; this.addressFlag = false;
    this.previousCount = number;
    $(".icon").css("color","#fff");
    $(".line").css("background","#fff");
    if (number == 1) {
      $("#icon0").css("color","#0072ff");
      $("#icon1").css("color","#0072ff");
      $("#line0").css("background","#0072ff");
      this.emailFlag = true;
    } else if (number == 2) {
      $("#icon0").css("color","#0072ff");
      $("#icon1").css("color","#0072ff");
      $("#icon2").css("color","#0072ff");
      $("#line0").css("background","#0072ff");
      $("#line1").css("background","#0072ff");
      this.phoneFlag = true;
    } else if (number == 3) {
      $("#icon0").css("color","#0072ff");
      $("#icon1").css("color","#0072ff");
      $("#icon2").css("color","#0072ff");
      $("#icon3").css("color","#0072ff");
      $("#line0").css("background","#0072ff");
      $("#line1").css("background","#0072ff");
      $("#line2").css("background","#0072ff");
      this.addressFlag = true;
    } else if(number == 4){
      $("#icon0").css("color","#0072ff");
      $("#icon1").css("color","#0072ff");
      $("#icon2").css("color","#0072ff");
      $("#icon3").css("color","#0072ff");
      $("#line0").css("background","#0072ff");
      $("#line1").css("background","#0072ff");
      $("#line2").css("background","#0072ff");
      this.addressFlag = true;
        this.addFlag = true;
    }else{
      this.nameFlag = true;
      $("#icon0").css("color","#0072ff");
    }
  }
  addUser(){
    var id = this.userArray.length == 0 ? 1 : this.lastInsteredID + 1;
   var send = {
      id : id,
      name : this.name,
      email : this.email,
      phone : this.phone,
      address : this.address
    }
    this.userArray.push(send);
    this.name = "";
    this.email = "";
    this.phone = "";
    this.address = "";
      this.lastInsteredID = id;
      this.checkValidation(null);
  }
  deleteUser(user:any){
      var index = this.userArray.indexOf((x:any) => x.id == user.id );
      this.userArray.splice(index,1);
  }
}
