import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  @Input()
  type?: string;
  
  panelOpenState = false;

  faQList = {
    flight: [
      {
        qtn: 'How to book a flight ticket online?',
        ans: `<div>
          <p>Booking flight tickets with Dreamland Travel is extremely hassle-free. 
          Follow the details below for a smooth booking experience. Follow the steps mentioned:</p>
          <ul>
            <li>Step 1: Open <a href="https://dreamlandtravel.co.in/">Dreamland Travel</a> and tap on the Flights tab.</li>
            <li>Step 2: On the top left corner, there are two tabs named One-Way as of One-Way and Round-Trip. Select the tab as per your preference.</li>
            <li>Step 3: Enter the departure point and destination point. Also, select the departure dates and return dates if looking for a round-trip. Select the number of travelers traveling and the preferred class you wish to fly in.</li>
            <li>Step 4: Tap on the Search button. You will be redirected to the flights' page, where all the details will be mentioned. All the available flights for your route will be mentioned on the next page.</li>
            <li>Step 5: Choose the flight that is appropriate and then tap the ‘Book Now’ option.</li>
            <li>Step 6: Fill in the required and apply your preferred coupon code to save money on your booking.</li>
            <li>Step 7: Tap the 'Continue Booking' option and fill in the details asked.</li>
            <li>Step 8: Now, make your payment using your preferred option. You can choose from a wide range of options from Debit card, Credit card, UPI, net banking, or wallet money.</li>
            <li>Step 9: Once the payment is done, you will receive an Email and SMS for the same. You will also receive your e-ticket on mobile and email ID.</li>
          </ul>
          <p>Booking flight tickets with Dreamland Travel is easy and hassle-free. Our aim is to make the travel experience easy for our customers. Don’t wait for the last moment, book your flight tickets to get the best deals.</p>
        </div>`
      },
      {
        qtn: 'How do you find the cheapest airfare?',
        ans: `<p>To find the cheapest airfare, you can visit our site or download the app and enter your departure and arrival cities and find out the cheapest days to fly with our fare calendar. In comparison to full- service carriers, low- cost airlines offer cheaper fares. By considering budget airlines, you can do great savings on airline tickets.</p>`
      },
      {
        qtn: 'What is the best day of the week to buy plane tickets?',
        ans: `<p>As per previous findings, the best day to book the cheapest flight tickets was Tuesday, but it’s not anymore. As more business travelers have started booking their flights during the week, the best day to buy those tickets is now Sunday. To avail more savings on flight tickets, try to book on a Sunday that is more than 21 days ahead of your trip.</p>`
      },
      {
        qtn: 'Is it cheaper to book flights at the last minute?',
        ans: `<p>There is a popular belief that if you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief, booking airline tickets late is often cheaper. As per the research, flight tickets are generally cheaper if booked three weeks before departure than tickets booked 6 months ahead. But, this is not necessary. The price of flights fluctuates daily or even hourly in various cases. Many times, it changes due to the increasing demand for a particular route by passengers. So, sometimes flights get cheaper while traveling closer to the travel date and in some cases, it gets expensive.</p>`
      },
      {
        qtn: 'Can I modify or cancel my flight reservation on Dreamland Travel?',
        ans: `<p>Yes, you can modify or cancel your flight reservation on Dreamland Travel. Simply log in to your account on our website or app, navigate to your booking details, and follow the provided options for changes or cancellations. Be aware of our modification and cancellation policies, including any associated fees.</p>`
      },
      {
        qtn: 'What should I do in case of flight delays or cancellations?',
        ans: `<p>In the event of flight delays or cancellations, Dreamland Travel is here to assist you. Check the status of your flight through our website or app, and if there are disruptions, contact our customer support team for guidance on available options. We strive to provide timely information and support to ensure a smooth travel experience.</p>`
      },
    ],
    hotel: [
      {
        qtn: 'How to book hotel online?',
        ans: `<div>
        <p>Booking online hotels with  is extremely hassle-free. Follow the below-mentioned steps to make your booking experience smooth.</p>
        <ul>
          <li>Step 1: Visit <a href="https://dreamlandtravel.co.in/">Dreamland Travel</a> and tap on the Hotels tab.</li>
          <li>Step 2: Enter the city name, location or specific hotel where you wish to book the stay at.</li>
          <li>Step 3: Mention the Check-in and Check-out dates, as per your choice in the mentioned tab.</li>
          <li>Step 4: Mention the number of rooms required as per the guest count in the "Rooms & Guests" section.</li>
          <li>Step 5: Tap on the 'Search' button and you will be directed to a new page, where all the hotels are mentioned as per your requirements.</li>
          <li>Step 6: After being redirected to the hotels, one can select the hotels, as per the amenities provided. You can also customize your search by selecting the options from the top left corner, like price range, ratings, nearby attractions, attractions and type of properties.</li>
          <li>Step 7: After customizing the search, one can select the hotel and select the number of rooms required.</li>
          <li>Step 8: After finalizing, you are required to tap on the 'Book Now' option.</li>
          <li>Step 9: Fill in the details asked and tap on 'Continue to payment'.</li>
          <li>Step 10: Now, make your payment using your preferred option. You can choose from a wide range of options from Debit cards, Credit cards, UPI, net banking, or wallet money.</li>
          <li>Step 11: Once the payment is done, you will receive an Email and SMS for the same. You will also receive your e-ticket on mobile and email ID.</li>
        </ul>
        <p>The process is simple and hassle-free. It is easy to book your travel online on Dreamland Travel. Save your time by booking hotels online and get the best deals with Dreamland Travel.</p>
      </div>`
      },
      {
        qtn: 'Can I book a hotel with a local id?',
        ans: `<p>There is no law that allows hotel authorities to prohibit local couples from spending time with each other in a hotel room. Earlier hoteliers used to deny the local couples as they wanted to give preference to the guests who traveled from far as they usually occupy the room for more days but local couples hardly book a room for one day. However, due to the growing number of startups in the hotel industry, local couples can also book hotel rooms.</p><p>There are some specific hotels which don't allow check-in with local ID proof but most of these are accepted now. Before booking a hotel, you may check on our website if someone can book a hotel with a local I'd proof or not. But most of the hotels allow check-in with a valid ID proof.</p>`
      },
      {
        qtn: 'How can I get early check-in or late check-out in a hotel?',
        ans: `<p>Early check-ins or late checkouts in hotels are subject to availability and customers have to ask about this directly from the hotels. If a hotel reception is accommodating, they can provide their guests with both Early Check-in and Late Check-out or at least one of these. However, it also depends if rooms are available in the hotel or not. Usually, guests can enjoy free early check-in or late check-out of up to 2 hours.</p>`
      },
      {
        qtn: 'How can unmarried couples book hotels in india?',
        ans: `<p>No law denies the stay of unmarried couples from booking and staying in a hotel. However, it solely depends on the hotel authority to allow check-ins in such hotels. Choosing to stay together is a personal choice, which can't be restricted.</p><p>Unmarried couples should always try to book their hotels online for 2 persons by checking earlier if the hotel provides them entry or not. Here is a tip, unmarried couples or any couple shouldn't indulge in activities that unnecessarily draw the attention of people. Generally, hotel reception checks the id proofs and then allows the guests to check-in without making any fuss about if they are unmarried or married.</p>`
      },
      {
        qtn: 'How can I book cheap hotel rooms in 5 star hotels?',
        ans: `<p>There are several 5-star hotels in various cities that are available at cheaper rates. To book cheap hotel rooms in 5-star hotels, one of the most important things that you can do is to be flexible about your dates. If you are not planning to travel during weekends, a stay can be booked at very cheaper rates.</p><p>One more tip is to book hotels in the off-season. By booking a hotel room at a location where there is a lesser crowd during a particular weather, customers can get really cheap deals. Suppose if you are only looking for a staycation or are willing to stay in 5-star hotels, then you can choose to visit cities like Jaipur, Agra or any tourist place in Northern India during the summers. Booking hotels at hill stations during the rainy season can also be an opportunity to get rooms at cheaper rates.</p>`
      },
      {
        qtn: 'How do I contact customer support for hotel-related inquiries on Dreamland Travel?',
        ans: `<p>Contacting Dreamland Travel's customer support is easy. Find our contact information on the website or app, and reach out for assistance with any hotel-related inquiries. Our dedicated support team is here to help you throughout your booking experience.</p>`
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
