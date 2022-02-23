import { Box } from '@mui/material';
import React from 'react';
import BoardNavbar from './_components/Navbar';

export default function Board() {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: 'url("/img/board-background.jpg")',
                backgroundSize: 'cover',
            }}
        >
            <BoardNavbar></BoardNavbar>
        </Box>
    )
}
