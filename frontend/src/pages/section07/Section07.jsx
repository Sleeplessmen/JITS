import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

const Section07 = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: 32 }}>
        <Button component={Link} to="/products" endIcon={<ArrowForwardIcon />}>
            Go to Products
        </Button>
        <Button component={Link} to="/add" endIcon={<ArrowForwardIcon />}>
            Go to Add Product
        </Button>
        <Button component={Link} to="/about" endIcon={<ArrowForwardIcon />}>
            Go to About
        </Button>
    </div>
);

export default Section07;
