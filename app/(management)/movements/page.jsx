'use client';

import { useEffect, useState } from "react";
import { getMovements } from "./(services)/services";
import { Table } from "antd";

export default function Movements() {
  const columns =[
    {title: "Sección",
    dataIndex: "section",
    key: "section"
  },
  {title: "Valor",
  dataIndex: "value",
  key: "value"
},
{title: "Tipo",
dataIndex: "movement_type",
key: "type"
}
  ]

const [movements, setMovements] = useState();
  useEffect(()=>{
  
    getMovements(setMovements)
  },[])

    return (
        <>
{      movements &&    console.log(movements)}
        <div className="grid grid-cols-3 grid-rows-2">
          <div className="col-span-3">
          <Table headerBg="#000" columns={columns} dataSource={movements  ?movements : []} />
          </div>
        </div>
        </>
    );
  }