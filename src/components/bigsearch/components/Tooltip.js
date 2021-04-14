import React, { Component } from 'react'

class CardTooltip extends Component {
    constructor () {
        super()
        this.state = {}
    }

    render() {
        const dt = this.props.data
        return (
            <div className="padding-15px">
                <div className="display-flex">
                    <div style={{width: 50, marginRight: 10}}>
                        <div className="image image-50px image-circle" style={{backgroundColor: '#f5f5f5', overflow: 'hidden'}}>
                            <img alt="" src={dt.image} />
                        </div>
                    </div>
                    <div style={{width: 'calc(100% - 60px)'}}>
                        <div className="post-top">
                            <div className="txt-site txt-11 txt-black txt-bold">{dt.name}</div>
                            <div className="txt-site txt-10 txt-grey">{dt.role}</div>
                        </div>
                    </div>
                </div>
                <div>
                    {dt.about && dt.about.map((ab, index) => {
                        return (
                            <div key={index} className="margin-top-10px margin-bottom-10px">
                                <p className="txt-site txt-10 txt-grey"><b className="card-employee-text txt-site txt-bold txt-black">{ab.title}</b> {ab.info}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CardTooltip