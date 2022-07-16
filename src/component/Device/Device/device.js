import { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './device.css'
import axios from 'axios';

export function Device(props) {

    const [device, setDevice] = useState()
    // const data = [
    //     { name: 'Page A', uv: 4000, pv: 2400, av:1234, amt: 2400 },
    //     { name: 'Page B', uv: 3000, pv: 1398, av:2123, amt: 2210 },
    //     { name: 'Page C', uv: 2000, pv: 9800, av:3421, amt: 2290 },
    //     { name: 'Page D', uv: 2780, pv: 3908, av:4123, amt: 2000 },
    //     { name: 'Page E', uv: 1890, pv: 4800, av:1324, amt: 2181 },
    //     { name: 'Page F', uv: 2390, pv: 3800, av:2134, amt: 2500 },
    //     { name: 'Page G', uv: 3490, pv: 4300, av:4213, amt: 2100 },
    // ]

    useEffect(() => {
        var config = {
            method: "get",
            url: `https://iot-health.onrender.com/heartSensorData/${props.device.Id}`,
            headers: {
                token: localStorage.getItem("token"),
            },
        };

        axios(config)
            .then(function (response) {
                setDevice(response.data.reverse());
            })
            .catch(function (error) {
                alert(error);
            });
    }, [])

    return <div className='de-wrap-chat'>
        <ResponsiveContainer className="chart" height={800} width={1500}>
            <LineChart
                width={600}
                height={300}
                data={device}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis dataKey="create" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="heartRate" stroke="#8884d8" activeDot={{ r: 25 }} />
                <Line type="monotone" dataKey="bodyTemperature" stroke="#82ca9d" />
                <Line type="monotone" dataKey="bloodPressure" stroke="#822a9f" />
            </LineChart>
        </ResponsiveContainer>
        <h3>{props.device.name}'s chart</h3>
    </div>
}