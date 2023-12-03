import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss']
})
export class MyWalletComponent implements OnInit {
  tabList = [
    {id: 1, title: '20,000', isActive: false},
    {id: 2, title: '50,000', isActive: false},
    {id: 3, title: '1,00,000', isActive: false, label: '₹500 cashback', isLabel: true},
    {id: 4, title: '5,00,000', isActive: false, label: '₹2500 cashback', isLabel: true},
  ];

  faqList = [
    {
      id: 1, title: 'What is My-Cash?', isActive: true,
      list: [
        {label: 'My Cash is digital money that you can utilize from your online wallet. You can add it via recharge or receive it as a refund and use it to make transactions on the Dreamland platform only.'},
      ]
    },
    {
      id: 2, title: 'What is Promo Cash?', isActive: false,
      list: [
        {label: 'Promo Cash is the amount given by Dreamland through an offer or marketing activity.'},
      ]
    },
    {
      id: 3, title: 'What is the validity of Promo Cash?', isActive: false,
      list: [
        {label: 'Promo Cash always comes with a validity date. This validity can vary based on the construct of the marketing activity it was earned from.'},
      ]
    },
    {
      id: 4, title: 'Can I transfer My-Cash to my bank account?', isActive: false,
      list: [
        {label: 'No, once money is added in the wallet it can not be transferred back to the a bank account.'},
      ]
    },
    {
      id: 5, title: 'How do I use Promo Cash?', isActive: false,
      list: [
        {label: 'Promo Cash will be automatically applied in each transaction. If the discount is already high for a transaction, the Promo Cash value may be capped.'},
      ]
    },
    {
      id: 6, title: 'What is the validity of My Cash?', isActive: false,
      list: [
        {label: 'My Cash added to your online wallet through recharge or received as a refund has no expiry. However, My Cash offered as a reward or cashback may or may not have a validity period.'},
      ]
    },
  ];
    rechargeAmt: string = '1000';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTab(item) {
    console.log('item: ', item);
    this.rechargeAmt = item.title;
    this.tabList.forEach(el => {
      if (item?.id === el?.id) {
        el.isActive = true;
      } else {
        el.isActive = false;
      }
      return el;
    });
  }

  onSelect(item) {
    this.faqList.forEach(el => {
      if (item?.id === el?.id) {
        el.isActive = true;
      } else {
        el.isActive = false;
      }
      return el;
    });
  }
}
