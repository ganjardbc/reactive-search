
import React, { Component } from 'react'
import { BrowserRouter as Router, HashRouter } from "react-router-dom"
import { resume } from './payload'
import './styles.css'

class Stars extends Component {
    constructor () {
        super()
        this.state = {}
    }

    render() {
        const {data} = this.props
        const str = [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5}
        ]
        return (
            <div style={{width: 120}} className="display-flex">
                {str && str.map((dt) => {
                    return (
                        <div key={dt.id} style={{width: 20, height: 20, backgroundColor: (dt.id <= data) ? '#555' : '#ccc'}}></div>
                    )
                })}
            </div>
        )
    }
}

class ViewCV extends Component {
    constructor () {
        super()
        this.state = {}
    }

    render() {
        return (
            <HashRouter history={Router.browserHistory}>
                <div className="app-login" style={{backgroundColor: '#fff'}}>
                    <div className="padding-30px">
                        <div style={{paddingBottom: 40}}>
                            <h2 className="txt-site txt-18 txt-main txt-bold">MILITARY CV RESUME</h2>
                        </div>
                        <div className="display-flex-normal" style={{paddingBottom: 40}}>
                            <div className="width width-full">
                                <h2 className="txt-site txt-32 txt-main txt-bold padding-top-10px padding-bottom-25px">{resume.name}</h2>
                                <i className="txt-site txt-16 txt-grey">{resume.role}</i>
                            </div>
                            <div className="width width-full">
                                <p className="txt-site txt-11 txt-grey">{resume.about}</p>
                            </div>
                        </div>
                        <div className="display-flex-normal">
                            <div className="width width-30" style={{paddingRight: '5%'}}>
                                {resume.info && resume.info.map((dt, index) => {
                                    return (
                                        <div key={index} style={{paddingBottom: 15}}>
                                            <h4 style={{paddingBottom: 15}} className="txt-site txt-14 txt-main txt-bold border-bottom">{dt.label}</h4>
                                            <div style={{paddingTop: 20}}>
                                                {dt.data && dt.data.map((lb, index) => {
                                                    return (
                                                        <div key={index} style={{paddingBottom: 20}}>
                                                            {lb.label && <div style={{paddingBottom: 5}} className="txt-site txt-11 txt-bold txt-main">{lb.label}</div>}
                                                            <div className="display-flex">
                                                                <div className="txt-site txt-11 txt-grey">{lb.value}</div>
                                                                {lb.stars && <Stars data={lb.stars} />}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="width width-65" style={{borderLeft: '4px #f5f5f5 solid'}}>
                                {resume.more && resume.more.map((dt, index) => {
                                    return (
                                        <div key={index} className="display-flex-normal">
                                            <div style={{position: 'relative', width: 60, paddingLeft: 20, top: -5}}>
                                                <i className="fa fa-2x fa-angle-right" />
                                            </div>
                                            <div style={{width: 'calc(100% - 60px)'}}>
                                                <h4 style={{paddingBottom: 15}} className="txt-site txt-14 txt-main txt-bold border-bottom">{dt.label}</h4>
                                                <div style={{paddingTop: 15, paddingBottom: 15}}>
                                                    {dt.data.map && dt.data.map((lb, index) => {
                                                        return (
                                                            <div key={index} style={{paddingBottom: 10}} className="display-flex-normal">
                                                                <div style={{width: 250}} className="txt-site txt-11 txt-main txt-bold">{lb.date}</div>
                                                                <div style={{width: 'calc(100% - 250px)'}}>
                                                                    {lb.label && <h4 style={{paddingBottom: 5}} className="txt-site txt-16 txt-main txt-bold">{lb.label}</h4>}
                                                                    {lb.desc && <i style={{paddingBottom: 5}} className="txt-site txt-11 txt-grey">{lb.desc}</i>}
                                                                    {lb.sublabel && <p style={{paddingBottom: 5}} className="txt-site txt-11 txt-grey">{lb.sublabel}</p>}
                                                                    {lb.list && (
                                                                        <div>
                                                                            <div className="txt-site txt-11 txt-main txt-bold">{lb.list.label} :</div>
                                                                            <ul className="resume-list">
                                                                                {lb.list.data && lb.list.data.map((ls, index) =>{
                                                                                    return (
                                                                                        <li key={index}>
                                                                                            {ls.title}
                                                                                        </li>
                                                                                    )
                                                                                })}
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default ViewCV