import Typography from '@mui/material/Typography'

export default function DevInf() {
    return (
        <Typography variant="body1">
            Developed by{' '}
            <Typography
                fontWeight="bold"
                fontSize={'23px'}
                variant="span"
                sx={{
                    background: '-webkit-linear-gradient(#d4af37, #0A192F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'underline',
                }}
            >
                <a
                    href="https://github.com/ali-amir-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit'}}
                >
                    Ali Amir
                </a>
            </Typography>
        </Typography>
    );
}