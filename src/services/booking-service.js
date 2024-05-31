const axios=require('axios');

const {BookingRepository}=require('../repository/index');
const {FLIGHT_SERVICE_PATH}=require('../config/serverConfig');
const { ServiceError } = require('../utils/errors');

class BookingService{
    constructor(){
        this.bookingRepository=new BookingRepository();
    }

    async createBooking(data){
        try {
            const flightId=data.flightId;
            
            const getFlightRequestURL=`${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`
        
            const flight=await axios.get(getFlightRequestURL);
        
            const flightData=response.data.data;
            let priceOfTheFlight=flightData.price;
            if(data.noOfSeats>flightData.totalSeats){
                throw new ServiceError('Something went wrong in Booking process','Insufficient seats in flight');
            }
            
        } catch (error) {
            console.log(error);
            throw new ServiceError(); 
        }
    }
}

module.exports=BookingService;