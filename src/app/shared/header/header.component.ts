import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { LoginComponent } from '../modal/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HOLIDAYURL, USER } from 'src/app/core/constants';
import { EnquiryComponent } from '../modal/enquiry/enquiry.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarOpen = false;
  isSideMenu = false;
  isOpen = false;
  isActive = false;
  
  weNumber = "https://wa.me/918285624833";
  sidebarMenu: any = [
    {id:1, Name: 'Home', Icon: 'home',  Route:'/'},
    {id:2,
      Name: 'Services', 
      Icon: 'settings',
      isOpen: false,
      Child: [
        {id: 8,Name: 'Flights', Icon: 'flight', Route:'flights'},
        {id: 9,Name: 'Hotels', Icon: 'hotel', Route:'hotels'},
        {id: 10,Name: 'Holidays', Icon: 'luggage',  redirect: HOLIDAYURL},
      ]
    },
    {id:3, Name: 'Web Check In', Icon: 'event_available', Route:'webCheckin'},
    // {Name: 'Agent Programme', Icon: 'workspace_premium'},  
    {id:4, Name: 'Manage Booking', Icon: 'work', Route:'myBooking'},
    {id:5, Name: 'My Wallet', Icon: 'account_balance_wallet', Route:'myWallet'},
    {id:6, Name: 'Transactional Report', Icon: 'report', Route:'transactionReport'},
    {id:7,
      Name: 'Support', 
      Icon: 'support_agent', 
      isOpen: false,
      Child: [
        {id: 11,Name: '011 4550 1020', Icon: 'phone', redirect: "tel:+01145501020"},
        {id: 12,Name: '082 8562 4833', type: 'FontAwesome', Icon: 'fa-brands fa-whatsapp', redirectNew: 'https://wa.me/918285624833'},
        {id: 13,Name: 'Send Enquiry', Icon: 'email', Model:'enquiry'},
        {id: 14,Name: 'Make Payment', Icon: 'credit_card', Route:'payment'},
      ]
    },
    {id:15, Name: 'About Us', Icon: 'contact_support', queryParam:'about-us'},
    {id:16, Name: 'Terms & Conditions', Icon: 'text_snippet', queryParam:'term-condition'},
  ];

  List: any = [
    {name:'My Profile', span:'Manage your profile, traveller details, login details and  password', position: '-112px -197px',route:'myProfile'},
    {name:'My Bookings', span:'See booking details, Print e-ticket, Cancel Booking, Modify Booking, Check Refund Status & more.', position: '-111px -166px',route:'myBooking'},
    {name:'My Wallet', span:'Use your wallet money to avail even greater discounts', position: '-143px -166px',route:'myWallet'},
    {name:'Transactional Report', span:'Access your flight and hotel transaction reports', position: '-180px -600px',route:'transactionReport'},
    {name:'Logout', position:'-182px -127px', route:null},
  ];

  languageList: any = [
    {id:'1', title:'English', name:'India', img: 'assets/svg/in.svg'},
    {id:'2', title:'English', name:'Australia', img: 'assets/svg/it.svg'},
    {id:'3', title:'English', name:'Philippines', img: 'assets/svg/tr.svg'},
    {id:'4', title:'English', name:'UK', img: 'assets/svg/gb.svg'},
    {id:'5', title:'繁體中文', name:'', img: 'assets/svg/tr.svg'},
    {id:'6', title:'ไทย', name:'', img: 'assets/svg/in.svg'},
    {id:'7', title:'Bahasa Malaysia', name:'', img: 'assets/svg/it.svg'},
    {id:'8', title:'Français', name:'', img: 'assets/svg/tr.svg'},
    {id:'9', title:'English', name:'Canada', img: 'assets/svg/gb.svg'},
    {id:'10', title:'English', name:'Malaysia', img: 'assets/svg/tr.svg'},
    {id:'11', title:'English', name:'Singapore', img: 'assets/svg/in.svg'},
    {id:'12', title:'English', name:'International', img: 'assets/svg/it.svg'},
    {id:'13', title:'日本語', name:'', img: 'assets/svg/tr.svg'},
    {id:'14', title:'Tiếng Việt', name:'', img: 'assets/svg/gb.svg'},
    {id:'15', title:'Français', name:'', img: 'assets/svg/tr.svg'},
    {id:'16', title:'Italiano', name:'', img: 'assets/svg/in.svg'},
    {id:'17', title:'English', name:'Hong Kong, SAR', img: 'assets/svg/it.svg'},
    {id:'18', title:'English', name:'New Zealand', img: 'assets/svg/tr.svg'},
    {id:'19', title:'English', name:'US', img: 'assets/svg/gb.svg'},
    {id:'20', title:'简体中文', name:'', img: 'assets/svg/tr.svg'},
    {id:'21', title:'한국어', name:'', img: 'assets/svg/it.svg'},
    {id:'22', title:'Bahasa Indonesia', name:'', img: 'assets/svg/tr.svg'},
    {id:'23', title:'Español', name:'', img: 'assets/svg/gb.svg'},
    {id:'24', title:'Русский', name:'', img: 'assets/svg/tr.svg'},
  ];
  popularList: any = [
    {id:'1', title:'INR', name:'Indian Rupee'},
    {id:'2', title:'SGD', name:'Singapore Dollar'},
    {id:'3', title:'HKD', name:'Hong Kong Dollar'},
    {id:'4', title:'MYR', name:'Malaysian Ringgit'},
    {id:'5', title:'TWD', name:'New Taiwan Dollar'},
    {id:'6', title:'USD', name:'U.S. Dollar'},
    {id:'7', title:'CNY', name:'Chinese Yuan'},
    {id:'8', title:'KRY', name:'Korean Won'},
  ];
  moreList: any = [
    {id:'1', title:'AED', name:'U.A.E Dirham'},
    {id:'2', title:'AUD', name:'Australian Dollar'},
    {id:'3', title:'CAD', name:'Canadian Dollar'},
    {id:'4', title:'CHF', name:'Swiss Franc'},
    {id:'5', title:'DKK', name:'Danish Krone'},
    {id:'6', title:'EGP', name:'Egyptian Pound'},
    {id:'7', title:'EUR', name:'Euro'},
    {id:'8', title:'FJD', name:'Fijian Dollar'},
    {id:'9', title:'GBP', name:'British Pound'},
    {id:'10', title:'IDR', name:'Indonesian Rupiah'},
    {id:'11', title:'ILS', name:'Israeli Shekel'},
    {id:'12', title:'ISK', name:'Icelandic Krona'},
    {id:'13', title:'JOD', name:'Jordanian Dinar'},
    {id:'14', title:'JPY', name:'Japanese Yen'},
    {id:'15', title:'KHR', name:'Cambodian Riel'},
    {id:'16', title:'LAK', name:'Lao Kip'},
    {id:'17', title:'MAD', name:'Moroccan Dirham'},
    {id:'18', title:'MGA', name:'Malagasy Ariary'},
    {id:'19', title:'MMK', name:'Burmese Kyat'},
    {id:'20', title:'MOP', name:'Macau Pataca'},
    {id:'21', title:'MUR', name:'Mauritian Rupee'},
    {id:'22', title:'MXN', name:'Mexican Peso'},
    {id:'23', title:'NOK', name:'Norwegian Krone'},
    {id:'24', title:'NZD', name:'New Zealand Dollar'},
    {id:'25', title:'OMR', name:'Omani Rial'},
    {id:'26', title:'PHP', name:'Philippine Peso'},
    {id:'27', title:'OAR', name:'Qatar Riyal'},
    {id:'28', title:'SEK', name:'Swedish Krona'},
    {id:'29', title:'THB', name:'Thai Baht'},
    {id:'30', title:'TRY', name:'Turkish Lira'},
    {id:'31', title:'VND', name:'Vietnamese Dong'},
    {id:'32', title:'ZAR', name:'South African Rand'},
  
  ];
  currentuser: any;
  currenciesList

  constructor(
    public commonService: CommonService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private router: Router,
  )
  {
    this.commonService.getSidebar().subscribe(open => {
      this.sidebarOpen = open;
    });
  }
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSideMenu = true;
        } else {
          this.isSideMenu = false;
        }
    });

    
    if (localStorage.getItem(USER)) {
      this.currentuser = localStorage.getItem(USER)
      this.currentuser = JSON.parse(this.currentuser);
    } else {
      this.currentuser = null;
    }
  }

  toggleSidebar(isOpen) {
    this.commonService.setSidebar(isOpen);

    let body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden'; 
    } else {
      body.style.overflow = 'auto'; 
    }
  }

  onToggle(item, subItem?) {
    this.sidebarMenu.forEach(el => {
      if (item?.id === el?.id) {
        if (el?.Route) {
          el.isActive = !el.isActive;
          this.router.navigate([item?.Route]);
          this.toggleSidebar(false);
        } else if (item?.queryParam) {
          el.isActive = !el.isActive;
          this.commonService.openInnerPage(item?.queryParam);
          this.toggleSidebar(false);
        } else if (item?.Child) {
          if (!subItem) {
            el.isActive = !el.isActive;
            el.isOpen = !el.isOpen;
          }
          el.Child.forEach(e => {
            if (subItem?.id === e?.id) {
              if (e?.Route) {
                e.isActive = !e.isActive;
                this.router.navigate([subItem?.Route]);
                this.toggleSidebar(false);
              } else if (subItem?.Model === 'enquiry') {
                this.openEnquiry();
              } else if (subItem?.redirect) {
                this.commonService.openUrl(subItem?.redirect);
                this.toggleSidebar(false);
              } else if (subItem?.redirectNew) {
                this.gotonext(subItem?.redirectNew, true);
                this.toggleSidebar(false);
              }
            } else {
              e.isActive = false;
            }
            return e;
          });
        }
      } else {
        el.isActive = false;
      }
      return el;
    });
  }
  
  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'login-modal',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (localStorage.getItem(USER)) {
          this.currentuser = localStorage.getItem(USER)
          this.currentuser = JSON.parse(this.currentuser);
        }
      }
    });
  }

  onClickProfile(data?) {
    if (data?.route) {
      this.router.navigate([data.route]);
    } else {
      localStorage.clear();
      this.currentuser = null;
      this.router.navigate(['flights']);
    }
  }

  openLanguage() {
    this.isOpen = !this.isOpen;
    this.isActive = false;
  }

  openCurrency() {
    this.isActive = !this.isActive;
    this.isOpen = false;
  }

  gotonext(url, type?) {
    if (type) {
      window.open(url, "_blank");
    } else {
      this.router.navigate([url]);
      this.toggleSidebar(false);
    }
  }

  openEnquiry(): void {
    const dialogRef = this.dialog.open(EnquiryComponent, {
      panelClass:"enquiryModal"
    });
  }
}
