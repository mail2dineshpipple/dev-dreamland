import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-invoice',
  templateUrl: './flight-invoice.component.html',
  styleUrls: ['./flight-invoice.component.scss']
})
export class FlightInvoiceComponent implements OnInit {

  passengerList = [
    {Id: 1, img: 'assets/images/male.png', name: 'Mr. Baldev Singh', type: 'Adult', ticket: '1769566789134', seat: '7C',meal: 'Veg'},
    {Id: 2, img: 'assets/images/female.png', name: 'Mrs. Veena Singh', type: 'Adult', ticket: '1769566789135', seat: '7B',meal: 'Veg'},
    {Id: 3, img: 'assets/images/boy.png', name: 'Mstr. Joy Singh', type: 'Child', ticket: '1769566789136', seat: '7A',meal: 'Veg'},
    {Id: 4, img: 'assets/images/girl.png', name: 'Mstr. Joy Singh', type: 'Child', ticket: '1769566789137', seat: '7C',meal: '------'},
    {Id: 4, img: 'assets/images/infant.png', name: 'Meghna Singh', type: 'Infant', ticket: '1769566789137', seat: '7C',meal: '------'},
    
  ]

  fareList = [
    {Id: 1, title: 'ADT x 02', basic: '₹4388.00', yq: '₹0', tax: '₹800.00', service: '₹0', fee: '₹0', total: '10188.00'},
    {Id: 2, title: 'Child x 01', basic: '₹4388.00', yq: '₹0', tax: '₹800.00', service: '₹0', fee: '₹0', total: '5100.00'},
    {Id: 3, fee: 'Total', total: '15288.00', class:'bold', isBold: true},
  ];

  baggageList = [
    {Id: 1, title: 'Adult', basic: 'DEL-PAT', cabin: '7 Kgs (1 Piece only)', check: '15 Kgs (1 Piece only)'},
    {Id: 2, title: 'Child', basic: 'DEL-PAT', cabin: '7 Kgs (1 Piece only)', check: '15 Kgs (1 Piece only)'},
    {Id: 3, title: 'Infant', basic: 'DEL-PAT', cabin: '------', check: '------'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
