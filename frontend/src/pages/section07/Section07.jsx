import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import styles from './Section07.module.css';

const Section07 = () => (
    <div className={styles.container}>
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
