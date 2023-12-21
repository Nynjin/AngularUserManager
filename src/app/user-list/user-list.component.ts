import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  visibleUsers : User[] = [];
  columnsToDisplay: string[] = ['name', 'occupation', 'email', 'details', 'update', 'delete'];

  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent = new PageEvent;

  ngOnInit(): void {
    this.loadData();
  }

  loadData = () => {
    this.users = [{"id":1,"name":"Minta Andreoletti","occupation":"Research Associate","email":"mandreoletti0@baidu.com","password":"$2a$04$UUbn8PnSc3p15E59mwuDNeTr.tiDdz7uy4NVQdzW9japClniSrN4m","bio":"Ute"},
    {"id":2,"name":"Karia Hoff","occupation":"Food Chemist","email":"khoff1@aboutads.info","password":"$2a$04$f6Fz7qVYO8G.WdmXPZrj5eyNNrperoLzs3VUl.radO1WhthChCynu","bio":"Yakama"},
    {"id":3,"name":"Teena Hearnshaw","occupation":"Professor","email":"thearnshaw2@sina.com.cn","password":"$2a$04$jmyZI8TmHX/pKO/C8vZho.zXvIzNC06Q2r/lJHrcPVugpIqfRG6b.","bio":"Colombian"},
    {"id":4,"name":"Gillian Benko","occupation":"Account Representative IV","email":"gbenko3@chronoengine.com","password":"$2a$04$.jKoTaiJajhlhrVA2rfHROghN6pn4vGD8F.LNTMNMhQWIbQSeWnF.","bio":"Tohono O'Odham"},
    {"id":5,"name":"Tobe Steynor","occupation":"Biostatistician III","email":"tsteynor4@oaic.gov.au","password":"$2a$04$uFRQ3zXvbZF9KD6YQ2oYl.Uor8t97OkgVWm2FekH/YW9rIpAtIYbW","bio":"Shoshone"},
    {"id":6,"name":"Aubrey Chevolleau","occupation":"Project Manager","email":"achevolleau5@unblog.fr","password":"$2a$04$1IeSZtxLsOZlJw6Ni6Uc.O60t.hIE3VJlIfKEid9ChWEDxh4/mgYC","bio":"Latin American Indian"},
    {"id":7,"name":"Kahaleel Cosgreave","occupation":"VP Sales","email":"kcosgreave6@cisco.com","password":"$2a$04$dc4xRLJZyUInefCGzv2QJ.Uj64vujO6xMWiyHYPW6bWao1XD71iyS","bio":"Colombian"},
    {"id":8,"name":"Shandra Matusevich","occupation":"Recruiting Manager","email":"smatusevich7@odnoklassniki.ru","password":"$2a$04$SXCf8yD5eQKQQracOZsMlOyskgmebDMOlgg.vXZqCY1pS6laQTR7y","bio":"Chamorro"},
    {"id":9,"name":"Mac Mitchelmore","occupation":"Business Systems Development Analyst","email":"mmitchelmore8@ifeng.com","password":"$2a$04$7.9.vtcP8Z9R35UfAPuAz.OkcIah54QsZ5fX6PDM7dbnTkw9Ck27G","bio":"Cree"},
    {"id":10,"name":"Kerr Newark","occupation":"Assistant Media Planner","email":"knewark9@house.gov","password":"$2a$04$QICEYRXtZ9JERQ3XO8Kd7uCQsz7.qnxdl5U21EiDoJpmadpF8RGju","bio":"Japanese"},
    {"id":11,"name":"Alick Powder","occupation":"Librarian","email":"apowdera@ftc.gov","password":"$2a$04$QTAfDoRXO.uBPlSlQhsCWOw/AboWFqUlL3kPmO2LQtpo1deFi7Tdi","bio":"Delaware"},
    {"id":12,"name":"Wolf Beller","occupation":"Programmer I","email":"wbellerb@umn.edu","password":"$2a$04$wUudvoIP.X/nvRANtIEgU.8s8PvYd/bbqw8Tut.F7MPXzDKUMzRAK","bio":"Sri Lankan"},
    {"id":13,"name":"Mignon Atrill","occupation":"Senior Editor","email":"matrillc@howstuffworks.com","password":"$2a$04$2kjPcFaDslqivyfN6yFUAePbsbKn2rvDKzz5hwOWBrA9Yx5PMGESG","bio":"Pakistani"},
    {"id":14,"name":"Carleen Knight","occupation":"Database Administrator IV","email":"cknightd@hhs.gov","password":"$2a$04$z2igodJqMYz0.iCA1xq5/uuUNA.fNghR1sa2z8Vbu7dBBvEWnoiNq","bio":"Choctaw"},
    {"id":15,"name":"Amargo Keyzor","occupation":"Marketing Assistant","email":"akeyzore@rakuten.co.jp","password":"$2a$04$Y7AE6f6Y6J95hSWI4l44r.fkj.supPw58cmFWH4pFT2HCoIA2d5Yq","bio":"Yuman"},]

    this.visibleUsers = this.users;
    this.length = this.users.length;
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    let begin = this.pageIndex*this.pageSize;
    begin = (begin > 0 && begin < this.length) ? begin : 0;
    
    let end = begin + this.pageSize;
    end = (end > 0 && end < this.length) ? end : this.length;

    this.visibleUsers = this.users.slice(begin, end);
  }
}
