import React from 'react';
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { shades } from '../../theme';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

    const { palette: { neutral } } = useTheme();

    return (

        <Box
            mt="70px"
            p="40px 0"
            backgroundColor={neutral.light}
        >
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box
                    width="clamp(20%, 30%, 40%)"
                >
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        ECOMMER</Typography>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries
                    </div>
                </Box>

                <Box>
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        mb="30px"
                    >
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Term & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        mb="30px"
                    >
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>

                <Box
                    width="clamp(20%, 25%, 30%)"
                >
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        mb="30px"
                    >
                        Contact Us
                    </Typography>
                    <Typography mb="30px">IRAN , KERMAN</Typography>
                    <Typography mb="30px">Email: example@gmail.com</Typography>
                    <Typography mb="30px">Number Phone:+98 991 898 6324</Typography>
                    
                </Box>
                <Box>
                    <Typography variant='h4'
                        fontWeight="bold"
                        sx={{
                            marginBottom: "10px"
                        }}
                        >Social Media</Typography>
                    <IconButton>
                        <FacebookIcon 
                        sx={{fontSize: "27px"}}
                        color={shades.secondary[400]}
                        />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon 
                        sx={{fontSize: "27px"}}
                        color={shades.secondary[400]}
                        />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon 
                        sx={{fontSize: "27px"}}
                        color={shades.secondary[400]}
                        />
                    </IconButton>
                </Box>

            </Box>
        </Box>
    );
};

export default Footer;