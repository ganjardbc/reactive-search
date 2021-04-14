import React, { Component } from 'react'
import GoogleMapReact from "google-map-react"
import MyMarkerIcon from "./MyMarkerIcon"

const defaultProps = {
    center: {
        lat: -6.8978388,
        lng: 107.617426
    }, 
    zoom: 15
}


class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...defaultProps,
            center: props.center ? props.center : defaultProps.center,
            zoom: props.zoom ? props.zoom : defaultProps.zoom
        }
    }

    componentDidMount() {}

    componentDidUpdate(prevProps) {
        if (this.props.center !== prevProps.center) this.setState({ center: this.props.center })
        if (this.props.zoom !== prevProps.zoom) this.setState({ zoom: this.props.zoom })
    }

    onChildMouseEnter = () => {
        console.log('you got me!!')
    }

    onChildMouseLeave = () => {
        console.log('you got me!!')
    }

    render() {
        const { markers, onClickMarker } = this.props
        const { center, zoom } = this.state
        return (
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCJB0Psn1cVe75sL1aNp3Dxvftw9cUqirk',
                    language: "id",
                    region: "ID"
                }}
                center={center}
                zoom={zoom}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers && markers.map((value) => {
                    return (
                        <MyMarkerIcon 
                            key={value.id} 
                            lat={value.lat} 
                            lng={value.lng} 
                            text={value.title} 
                            isSonar={value.isSonar}
                            isHover={true} 
                            isActive={value.isActive}
                            icon={value.icon} 
                            image={value.image}
                            tooltip={value.tooltip}
                            centerData={(e) => this.setState({center: e})}
                            onClick={() => onClickMarker(value)}
                        />
                    );
                })}
            </GoogleMapReact>
        )
    }
}

export default Container