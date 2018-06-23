import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropoTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profileActions'
import Spinner from '../common/Spinner'
import { Link } from 'react-router-dom'


class Dashboard extends Component {

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let dashboardContent;

        if (profile === null || loading) {
            dashboardContent = <Spinner />
        } else {
            if (Object.keys(profile).length > 0) {
                dashboardContent = <h4>todo</h4>
            } else {

                dashboardContent = (<div className="lead text-muted">Welcome {user.name}

                    <p>No profile created</p>
                    <Link to="/create-profile" className="btn btn-lg btn-info">
                        Create profile
                    </Link>
                </div>

                )


            }
        }
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Dashboard</h1>
                            {dashboardContent}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropoTypes.func.isRequired,
    auth: PropoTypes.object.isRequired,
    profile: PropoTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
