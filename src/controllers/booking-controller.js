const {StatusCodes}=require('http-status-codes')
const {BookingService}=require('../services/index');

const bookingService=new BookingService();

const create=async (req,res)=>{
    try {
        console.log(req.body)
        const response=await bookingService.createBooking(req.body);
        console.log(response)
        return res.status(StatusCodes.OK).json({
            data:response,
            message:'Successfully completed booking',
            success:true,
            err:{},
            
        })

    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            message:error.message,
            success:false,
            data:{},
            err:error.explanation 
        })
    }

}

module.exports={
    create,

}