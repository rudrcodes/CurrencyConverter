import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../reduxStore/features/changeValues';


function CurrencyConverter() {
    const [src, setSrc] = useState('')
    const [target, setTarget] = useState('')
    const [convertedCurrency, setconvertedCurrency] = useState(null)
    const [inputCurrency, setinputCurrency] = useState(null)
    const usdVal = useSelector(state => state.changeValues.USD).toFixed(2)
    const audVal = useSelector(state => state.changeValues.AUD).toFixed(2)
    const inrVal = useSelector(state => state.changeValues.INR).toFixed(2)


    const dispatch = useDispatch();

    setInterval(() => {
        let choice = Math.floor(Math.random() * 2);
        console.log(choice)
        if (choice == 0) dispatch(increment())
        else dispatch(decrement())
    // After every sec the browser started hanging  , that's why made the time to this much
    }, 1200)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (src.length == 0) {

            return toast(' Select Source curreny!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        if (target == "") {
            return toast(' Select Target curreny!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        if (inputCurrency == null) return toast(' Enter input amount!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        console.log(src, target)


        const conversionRates = {
            "EUR": {
                "USD": usdVal,
                "INR": (usdVal * inrVal),
                "AUD": (usdVal / audVal)
            },
            "USD": {
                "INR": inrVal,
                "EUR": 1 / usdVal,
                "AUD": 1 / audVal,
            },
            "AUD": {
                "USD": audVal,
                "INR": inrVal * audVal,
                "EUR": (audVal / usdVal)
            },
            "INR": {
                "USD": 1 / inrVal,
                "AUD": 1 / (inrVal * audVal),
                "EUR": 1 / (usdVal * inrVal)
            }
        };

        function getConversionRate(src, target) {
            if (src === target) {
                return 1;
            }
            if (conversionRates[src] && conversionRates[src][target]) {
                return conversionRates[src][target];
            }
            if (conversionRates[target] && conversionRates[target][src]) {
                return 1 / conversionRates[target][src];
            }
            throw new Error(`Conversion rate from ${src} to ${target} not available`);
        }

        function convertCurrency(src, target, amount) {
            const rate = getConversionRate(src, target);
            return amount * rate;
        }

        let ans = convertCurrency(src, target, inputCurrency)

        setconvertedCurrency(ans.toFixed(2))


    }
    return (

        <Form onSubmit={handleSubmit} className='min-h-[500px] bg-gray-200 p-4 min-w-[400px] rounded-lg flex justify-center items-center flex-col'>
            <h1 className='text-2xl text-bold'>Currency Converter</h1>
            <div>

                <Form.Group className="mb-3">
                    <Form.Label>Source currency </Form.Label>
                    <Form.Select onChange={(e) => {
                        setSrc(e.target.value)
                    }} value={src} className='bg-gray-100 '>
                        <option></option>
                        <option>EUR</option>
                        <option>INR</option>
                        <option>USD</option>
                        <option>AUD</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Target currency</Form.Label>
                    <Form.Select onChange={(e) => {
                        setTarget(e.target.value)
                    }} className='bg-gray-100 '>
                        <option></option>
                        <option>INR</option>
                        <option>EUR</option>
                        <option>USD</option>
                        <option>AUD</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control onChange={
                        (e) => {
                            setinputCurrency(e.target.value)
                        }
                    } value={inputCurrency} />
                </Form.Group>
                <Form.Group className="mb-3 bg-gray-100 p-4 text-gray-500">
                    <Form.Label>Estimated converted amount: <span className='text-green-600 pl-4'>{convertedCurrency}</span></Form.Label>
                </Form.Group>
                <div className='flex justify-center items-center text-bold'>
                    <button type="submit" className="mb-3 rounded-md bg-gray-100 py-1 px-10 text-black " >Exchange</button>
                </div>
            </div>

        </Form>
    );
}

export default CurrencyConverter;