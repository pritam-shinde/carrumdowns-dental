import { Box } from '@mui/material';
import Image from 'next/image';

const InterestFree = () => {
    return (
        <>
            <Box>
                <Image src="/interest-free/payment-plan.jpg" alt="interest-free" width={980} height={780} className='img-fluid'/>
            </Box>
        </>
    )
}

export default InterestFree