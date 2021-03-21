import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

class Piechart extends React.Component {

    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    pieData = [
       {
    "DepartmentName": "Department1",
    "Sales": 1000,
    "Percentage": 7
  },
  {
    "DepartmentName": "Department2",
    "Sales": 2000,
    "Percentage": 13
  },
  {
    "DepartmentName": "Department3",
    "Sales": 3000,
    "Percentage": 20
  },
  {
    "DepartmentName": "Department4",
    "Sales": 4000,
    "Percentage": 27
  },
  {
    "DepartmentName": "Department5",
    "Sales": 5000,
    "Percentage": 33
  }
    ];

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

    render() {
        return (
            <PieChart width={730} height={300}>
                <Pie data={this.pieData} color="#000000" dataKey="Percentage" nameKey="DepartmentName" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        )
    };
}

export default Piechart;