// import React from 'react';
// import Stack from '@mui/material/Stack';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert, {AlertProps} from '@mui/material/Alert';
// import {appSetErrorAC} from '../../../state/app-reducer';
// import {useAppDispatch} from '../../hooks/useAppDispatch';
// import {selectAppError} from '../../../state/selectors';
// import {useAppSelector} from '../../hooks/useAppSelector';
//
// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//     props,
//     ref,
// ) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
//
// export const ErrorSnackBar = () => {
//     // const [open, setOpen] = React.useState(false);
//     const error = useAppSelector(selectAppError);
//     const dispatch = useAppDispatch();
//
//     const isOpen = error !== null;
//
//     // const handleClick = () => {
//     //     setOpen(true);
//     // };
//
//     const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
//         if (reason === 'clickaway') {
//             return;
//         }
//         // setOpen(false);
//         dispatch(appSetErrorAC( null));
//     };
//
//     return (
//         <Stack spacing={2} sx={{width: '100%'}}>
//             {/*<Button variant="outlined" onClick={handleClick}>*/}
//             {/*    Open success snackbar*/}
//             {/*</Button>*/}
//             <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
//                     {/*This is a success message!*/}
//                     {error}
//                 </Alert>
//             </Snackbar>
//             {/*<Alert severity="error">This is an error message!</Alert>
//             <Alert severity="warning">This is a warning message!</Alert>
//             <Alert severity="info">This is an information message!</Alert>
//             <Alert severity="success">This is a success message!</Alert>*/}
//         </Stack>
//     );
// }

export default {}