import React from 'react'
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch'
import PropTypes from 'prop-types'
import { NavLink  } from "react-router-dom"
import Topic from './Topic'

const onResultStats = (results, time) => (
	<div className="flex justify-end">
		{results} results found in {time}ms
	</div>
);

const onData = (data, currentTopics, toggleTopic) => (
	<div style={{width: 'calc(100% / 3)'}} key={data.fullname}>
        <div style={{margin: '10px'}}>
            <div className="card-employee">
                <NavLink to="/view-map" style={{display: 'block'}}>
                    <div className="padding-15px" style={{width: '100%'}}>
                        <div className="display-flex" style={{marginBottom: 10}}>
                            <div style={{width: 50, marginRight: 10}}>
                                <div className="image image-50px image-circle" style={{backgroundColor: '#f5f5f5', overflow: 'hidden'}}>
                                    <img alt="" src={data.avatar} />
                                </div>
                            </div>
                            <div style={{width: 'calc(100% - 60px)'}}>
                                <div className="post-top">
                                    <div className="txt-site txt-11 txt-black txt-bold">{data.name}</div>
                                    <div className="txt-site txt-10 txt-grey">{data.owner}</div>
                                </div>
                            </div>
                        </div>
						<div style={{width: '100%', height: 150, overflow: 'auto', marginBottom: 10}}>
							<div className="txt-site txt-10 txt-grey" style={{marginBottom: 10}}>{data.description}</div>
							<div className="flex wrap justify-center" style={{marginBottom: 10}}>
								{
									data.topics.slice(0, 7)
										.map(item => (
											<Topic
												key={item}
												active={currentTopics.includes(item)}
												toggleTopic={toggleTopic}
											>
												{item}
											</Topic>
										))
								}
							</div>
						</div>

						<div className="display-flex-normal content-center" style={{marginBottom: 10}}>
							<div style={{marginRight: 10, marginLeft: 10}}><div className="txt-site txt-10 txt-main"><i style={{marginRight: 5}} className="card-icon fas fa-star" />{data.stars}</div></div>
							<div style={{marginRight: 10, marginLeft: 10}}><div className="txt-site txt-10 txt-main"><i style={{marginRight: 5}} className="card-icon fas fa-code-branch" />{data.forks}</div></div>
							<div style={{marginRight: 10, marginLeft: 10}}><div className="txt-site txt-10 txt-main"><i style={{marginRight: 5}} className="card-icon fas fa-eye" />{data.watchers}</div></div>
						</div>

						<div className="display-flex-normal content-center" style={{marginBottom: 10}}>
                            <div>
								<NavLink to="/view-cv" className="btn btn-small btn-grey" style={{paddingTop: 5, paddingBottom: 5}}>
                                    View CV <i className="fa fa-lg fa-file-word" />
                                </NavLink>
							</div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
	</div>
);

const Results = ({ toggleTopic, currentTopics }) => (
	<div className="result-list">
		<SelectedFilters className="m1" />
		<ReactiveList
			componentId="results"
			dataField="name"
			onData={data => onData(data, currentTopics, toggleTopic)}
			onResultStats={onResultStats}
			react={{
				and: ['language', 'topics', 'pushed', 'created', 'stars', 'forks', 'repo'],
			}}
			pagination
			innerClass={{
				list: 'display-flex content-left margin-top-10px',
				pagination: 'result-list-pagination',
				resultsInfo: 'display-flex margin-top-20px txt-site txt-11 txt-main txt-bold',
				poweredBy: 'display-none',
			}}
			size={6}
			sortOptions={[
				{
					label: 'Best Match',
					dataField: '_score',
					sortBy: 'desc',
				},
				{
					label: 'Most Stars',
					dataField: 'stars',
					sortBy: 'desc',
				},
				{
					label: 'Fewest Stars',
					dataField: 'stars',
					sortBy: 'asc',
				},
				{
					label: 'Most Forks',
					dataField: 'forks',
					sortBy: 'desc',
				},
				{
					label: 'Fewest Forks',
					dataField: 'forks',
					sortBy: 'asc',
				},
				{
					label: 'A to Z',
					dataField: 'owner.raw',
					sortBy: 'asc',
				},
				{
					label: 'Z to A',
					dataField: 'owner.raw',
					sortBy: 'desc',
				},
				{
					label: 'Recently Updated',
					dataField: 'pushed',
					sortBy: 'desc',
				},
				{
					label: 'Least Recently Updated',
					dataField: 'pushed',
					sortBy: 'asc',
				},
			]}
		/>
	</div>
);

Results.propTypes = {
	toggleTopic: PropTypes.func,
	currentTopics: PropTypes.arrayOf(PropTypes.string),
};

export default Results;
