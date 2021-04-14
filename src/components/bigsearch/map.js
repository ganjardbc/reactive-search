import React, { Component } from 'react'
import SimpleGoogleMap from './components/googleMap'
import CardTooltip from './components/Tooltip'

const payload = {
    "image": "https://cdn.pixabay.com/photo/2020/07/22/04/27/man-5428005_960_720.jpg", 
    "name": "Dr. Andrew Malangbong",
    "role": "Electrician Expert",
    "about": [
        {"title": "Developers use Agile practices", "info": "to create applications and commit the changes into branches in a shared development environment"},
        {"title": "Jenkins is the automation server", "info": "that helps to coordinate the release pipeline, and JFrog Artifactory is the application repository; however, other equivalent tools could be used for both"}
    ]
}

const payloadFull = {
    "image": "https://cdn.pixabay.com/photo/2020/07/22/04/27/man-5428005_960_720.jpg", 
    "name": "Dr. Andrew Malangbong",
    "role": "Electrician Expert",
    "about": [
        {"title": "Developers use Agile practices", "info": "to create applications and commit the changes into branches in a shared development environment"},
        {"title": "Jenkins is the automation server", "info": "that helps to coordinate the release pipeline, and JFrog Artifactory is the application repository; however, other equivalent tools could be used for both"},
        {"title": "Developers use Agile practices", "info": "to create applications and commit the changes into branches in a shared development environment"},
        {"title": "Jenkins is the automation server", "info": "that helps to coordinate the release pipeline, and JFrog Artifactory is the application repository; however, other equivalent tools could be used for both"},
        {"title": "Developers use Agile practices", "info": "to create applications and commit the changes into branches in a shared development environment"},
        {"title": "Jenkins is the automation server", "info": "that helps to coordinate the release pipeline, and JFrog Artifactory is the application repository; however, other equivalent tools could be used for both"},
        {"title": "Developers use Agile practices", "info": "to create applications and commit the changes into branches in a shared development environment"},
        {"title": "Jenkins is the automation server", "info": "that helps to coordinate the release pipeline, and JFrog Artifactory is the application repository; however, other equivalent tools could be used for both"}
    ]
}

const marker = {
    id: "",
    title: "",
    icon: "fa fa-lg fa-user",
    image: "https://cdn.pixabay.com/photo/2020/07/22/04/27/man-5428005_960_720.jpg",
    tooltip: <CardTooltip data={payload} />,
    isHover: false,
    isSonar: false,
    isActive: false,
    lat: "",
    lng: ""
}

const defaultPayload = {
    pointer: {
        title: "12.5 km / 8 Hours",
        sub: "Single Moda - Inland Truck"
    },
    destination: {
        start: {
            title: "LGN Nusantara",
            sub: "22 March 2020 19.00 PM",
            icon: "fa fa-lg fa-warehouse",
        },
        goal: {
            title: "DSP Panjang",
            sub: "23 March 2020 19.00 PM",
            icon: "fa fa-lg fa-warehouse",
        }
    },
    map: {
        center: {
            lat: -1.901935,
            lng: 109.913175
        },
        markers: [
            {
                ...marker,
                id: 1,
                lat: -1.901935,
                lng: 109.913175
            },
            {
                ...marker,
                id: 2,
                lat: -6.227834,
                lng: 106.8815708
            },
            {
                ...marker,
                id: 3,
                lat: -7.0276694,
                lng: 110.4468461
            }
        ],
        zoom: 6
    }
}

class ContentPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { onClose } = this.props
        const logo = [
            {image: 'https://satlantasgrobogan.com/foto_statis/56logo-satlantas-png-2.png'},
            {image: 'https://satlantasgrobogan.com/foto_statis/56logo-satlantas-png-2.png'},
            {image: 'https://satlantasgrobogan.com/foto_statis/56logo-satlantas-png-2.png'},
            {image: 'https://satlantasgrobogan.com/foto_statis/56logo-satlantas-png-2.png'}
        ]
        return (
            <div
                className="border-all change-scrollbar-normal"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: "400px",
                    height: "calc(100% - 32px)",
                    padding: "15px",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    overflowY: "auto"
                }}>
                <button
                    className="btn btn-small-circle btn-grey"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 10
                    }}
                    onClick={() => onClose()}>
                    <i className="fa fa-lg fa-times" />
                </button>
                <div>
                    <CardTooltip data={payloadFull} />
                </div>
                <div className="display-flex-normal" style={{paddingTop: 0}}>
                    {logo && logo.map((dt, index) => {
                        return (
                            <div key={index} className="padding-15px">
                                <div className="image image-all">
                                    <img src={dt.image} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

class Map extends Component {
    constructor () {
        super()
        this.state = {
            data: defaultPayload,
            visibleContent: false
        }
    }

    setActiveMap = (id) => {
        let payload = this.state.data
        let markers = payload && payload.map && payload.map.markers
        let newMarkers = markers && markers.map((dt) => {
            return { ...dt, isActive: (dt.id === id) ? true : false }
        })
        let newPayload = { ...payload, map: { ...payload.map, markers: newMarkers } }
        this.setState({ data: newPayload })
    }

    render() {
        const {data, visibleContent} = this.state
        return (
            <div className="app-login" style={{backgroundColor: '#fff'}}>
                {/* <div style={{padding: 15}}>
                    <h2 className="txt-site txt-13 txt-main txt-bold">MAP VIEW</h2>
                </div> */}
                <div style={{height: '100vh'}}>
                    <SimpleGoogleMap 
                        zoom={data.map.zoom}
                        center={data.map.center}
                        markers={data.map.markers}
                        enableIconMarker={true}
                        onClickMarker={(e) => {
                            this.setActiveMap(e.id)
                            this.setState({visibleContent: true})
                        }} />
                    
                    {visibleContent && (
                        <ContentPopup
                            onClose={() => {
                                this.setActiveMap(null)
                                this.setState({ visibleContent: false })
                            }}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Map