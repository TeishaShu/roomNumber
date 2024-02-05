import React, { useEffect, useState } from "react";
import CustomInputNumber from "./../CustomInputNumber"

const RoomAllocation = (props) => {
  const { guest, room, onChange } = props;
  const [orderData, setOrderData] = useState([])
  const [remainGuest, setRemainGuest] = useState(guest)



  return (
    <div style={{ width: '350px' }}>
      <div className="title">住客人數: {guest}人/{room}房</div>
      <div className="reminderMessage">尚未分配人數：{remainGuest}人</div>
      {orderData.map(el => {
        const roomPeople = 4;
        const adultMin = 1;
        const childMin = 0;
        const adultStep = 1;
        const childStep = 1;
        return (
          <div className="roomWrapper" key={el.ui_id}>
            <div className="title">房間：0人</div>
            <div className="itemWrapper">
              <div className="itemLabel">
                大人
                <div>年齡 20+</div>
              </div>
              <CustomInputNumber
                min={adultMin}
                max={99}
                step={adultStep}
                name="adult"
                value={el.adult}
                disabled={false}//人數滿
                onChange={event => { }}
                onBlur={event => { }}
              />
            </div>
            <div className="itemWrapper">
              <div className="itemLabel">
                小孩
              </div>
              <CustomInputNumber
                min={childMin}
                max={99}
                step={childStep}
                name="child"
                value={el.child}
                disabled={false}
                onChange={event => { }}
                onBlur={event => { }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RoomAllocation