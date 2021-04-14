import React, { Component } from 'react'
// import { BrowserRouter as Router, HashRouter } from "react-router-dom"
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch'
import './styles.css'
import theme from '../../theme'
import Employee from './components/Employee'
import Navbar from './components/Navbar'

// class FilterComponent extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             title: props.title ? props.title : 'CHOOSE ONE',
//             selected: '',
//             visible: false
//         }
//     }

//     openDropdown = () => {
//         this.setState({visible: !this.state.visible})
//         // this.handleClickOutside(document.getElementById('filter'))
//     }

//     setDropdown = (data) => {
//         this.setState({selected: data, visible: false})
//     }

//     handleClickOutside(element) {
//         const outsideclickListener = (event) => {
//             if (!element.contains(event.target)) {
//                 this.setState({ visible: false })
//                 removeClickListener()
//             }
//         }
    
//         const removeClickListener = () => {
//             document.removeEventListener('click', outsideclickListener)
//         }
    
//         document.addEventListener('click', outsideclickListener)
//     }

//     render() {
//         const {title, selected, visible} = this.state
//         const {data, position} = this.props
//         let post = { top: "35px", width: '250px' }

//         switch (position) {
//             case 'left':
//                 post = { top: "35px", width: '250px', left: '0' }
//                 break;
//             default:
//                 post = { top: "35px", width: '250px' }
//                 break;
//         }

//         return (
//             <div style={{ position: 'relative' }} id="filter">
//                 <button
//                     onClick={() => this.openDropdown()}
//                     className={visible ? "btn btn-small btn-grey-dark" : "btn btn-small btn-grey"}>
//                     {title} {selected ? ' : ' + selected : ''} <i style={{ marginLeft: '5px', fontSize: "11px" }} className="fa fa-lg fa-chevron-down"></i>
//                 </button>
//                 {visible &&
//                     <div className="app-menu-popup" style={post}>
//                         <ul>
//                             {data && data.map((dt, index) => {
//                             return (
//                                 <li 
//                                     key={index} 
//                                     onClick={() => {
//                                         this.setDropdown(dt.value)
//                                     }}
//                                     style={{ padding: "10px 15px" }}>
//                                     <span className="txt-site txt-10 txt-black">{dt.value}</span>
//                                 </li>
//                             )
//                             })}
//                         </ul>
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

class BigSearch extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentTopics: [],
        }
    }

    setTopics = (currentTopics) => {
		this.setState({
			currentTopics: currentTopics || [],
		});
	}

	toggleTopic = (topic) => {
		const { currentTopics } = this.state;
		const nextState = currentTopics.includes(topic)
			? currentTopics.filter(item => item !== topic)
			: currentTopics.concat(topic);
		this.setState({
			currentTopics: nextState,
		});
	}

    render() {
        const current = this.state.currentTopics
        console.log('current', current)
        return (
            // <HashRouter history={Router.browserHistory}>
                <ReactiveBase
                    app="gitxplore-app"
                    credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
                    type="gitxplore-latest"
                    theme={theme}
                >
                    <div className="app-login" style={{backgroundColor: '#fff'}}>
                        <div className="display-flex-normal">
                            <div style={{height: '100vh', backgroundColor: '#fff'}} className="width width-27 change-scrollbar">
                                <div style={{backgroundColor: '#fff', padding: '15px'}}>
                                    <div className="slide-content-panel display-flex-normal" style={{padding: '0', width: '100%'}}>
                                        <div style={{width: '100%'}}>
                                            <h2 className="txt-site txt-16 txt-black txt-bold">HCIS BIGSEARCH</h2>
                                            <p className="txt-site txt-10 txt-grey">Search everything relevance</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Navbar currentTopics={this.state.currentTopics} setTopics={this.setTopics} />
                                    </div>
                                </div>
                            </div>
                            <div className="width width-73 change-scrollbar" style={{height: '100vh'}} >
                                <div className="padding-15px">
                                    <div>
                                        <div className="display-flex space-between margin-bottom-5px">
                                            <div className="txt-site txt-9 txt-black txt-bold" style={{paddingTop: 7}}>DATASEARCH</div>
                                            <button className="btn btn-small btn-grey">
                                                EXPORT <i className="fa fa-lg fa-file-excel" />
                                            </button>
                                        </div>
                                        <div className="margin-bottom-10px">
                                            <DataSearch
                                                componentId="repo"
                                                filterLabel="Search"
                                                dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
                                                placeholder="Search Repos"
                                                iconPosition="left"
                                                autosuggest={true}
                                                URLParams
                                                className="data-search-container results-container"
                                                innerClass={{
                                                    input: 'search-input',
                                                }}
                                            />
                                        </div>
                                        {/* <div className="display-flex">
                                            <div className="display-flex-normal">
                                                <FilterComponent title="GRANULAR FILTER" position={'left'} data={[{key: 'context', value: 'Search Context'}, {key: 'custom', value: 'Custom/Template'}]} />
                                                <FilterComponent title="MAJOR FILTER" position={'left'} data={[{key: 'zone', value: 'Zone'}, {key: 'Territory', value: 'Territory'}, {key: 'Age', value: 'Age'}]} />
                                            </div>
                                            <div>
                                                <FilterComponent title="SORTING" data={[{key: 'a-z', value: 'A - Z'}, {key: 'z-a', value: 'Z - A'}]} />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div>
                                        <Employee currentTopics={this.state.currentTopics} toggleTopic={this.toggleTopic} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactiveBase>
            // </HashRouter>
        )
    }
}

export default BigSearch