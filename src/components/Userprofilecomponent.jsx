import { ToastContainer, toast } from 'react-toastify'; 
function Userprofilecomponent() {
    return (
        <>

            <div classname="Profile" style={{ display: 'flex'}}>
                <form id="msform" style={{marginLeft:'140px',marginRight:'0px'}}>
                    <fieldset id="p1">
                        {/* <h2 class="fs-title">Create your account</h2>
      <h3 class="fs-subtitle">This is step 1</h3> */}
                        <div className="student-profile py-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card shadow-sm">
                                            <div className="card-header bg-transparent text-center">
                                                <img
                                                    className="profile_img"
                                                    src="https://source.unsplash.com/600x300/?student"
                                                    alt="student dp"
                                                />
                                                <h2 class="fs-title">Nandkumar Mohite</h2>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    <strong className="pr-1">User ID:</strong>321000001
                                                </p>
                                                <p className="mb-0">
                                                    <strong className="pr-1">Number of Book:</strong>4
                                                </p>
                                                <p className="mb-0">
                                                    <strong className="pr-1">Table Number:</strong>54
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card shadow-sm">
                                            <div className="card-header bg-transparent border-0">
                                                <h3 className="mb-0">
                                                    General Information
                                                </h3>
                                            </div>
                                            <div className="card-body pt-0">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th width="30%">Email Id</th>
                                                            <td width="2%">:</td>
                                                            <td>n.b.mohite88@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Mobile Number</th>
                                                            <td width="2%">:</td>
                                                            <td>9834900568</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Password</th>
                                                            <td width="2%">:</td>
                                                            <td>2020</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Gender</th>
                                                            <td width="2%">:</td>
                                                            <td>Male</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Religion</th>
                                                            <td width="2%">:</td>
                                                            <td>Group</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">blood</th>
                                                            <td width="2%">:</td>
                                                            <td>B+</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <div style={{ height: 26 }} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <form id="msform" style={{marginLeft:'0px',marginRight:'0px'}}>
                    <fieldset id="p1">
                        <h2 class="fs-title">Other Information</h2>
                        <h3 class="fs-subtitle">you can fill the remaining one</h3>
                        <div className="student-profile py-4">
                            <div className="card-body pt-0">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th width="30%">Email Id</th>
                                            <td width="2%">:</td>
                                            <td>n.b.mohite88@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Mobile Number</th>
                                            <td width="2%">:</td>
                                            <td>9834900568</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Password</th>
                                            <td width="2%">:</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Religion</th>
                                            <td width="2%">:</td>
                                            <td>Group</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">blood</th>
                                            <td width="2%">:</td>
                                            <td>B+</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </fieldset>
                </form>

                <form id="msform" style={{marginLeft:'0px',marginRight:'0px'}}>
                    <fieldset id="p1">
                        <h2 class="fs-title">Other Information</h2>
                        <h3 class="fs-subtitle">you can fill the remaining one</h3>
                        <div className="student-profile py-4">
                            <div className="card-body pt-0">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th width="30%">Email Id</th>
                                            <td width="2%">:</td>
                                            <td>n.b.mohite88@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Mobile Number</th>
                                            <td width="2%">:</td>
                                            <td>9834900568</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Password</th>
                                            <td width="2%">:</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Religion</th>
                                            <td width="2%">:</td>
                                            <td>Group</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">blood</th>
                                            <td width="2%">:</td>
                                            <td>B+</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </fieldset>
                </form>
            </div>

            <div>    
        <h4 className="navheader" align="center">React-Toastify</h4>      
        <button  className="btn btn-success btnspace" onClick={()=>toast.success('Success Message')}> Success Message</button>    
        <button   className="btn btn-info btnspace" onClick={()=>toast.info('Info Message')}>Info Message</button>    
        <button  className="btn btn-danger btnspace" onClick={()=>toast.error('Error Message')}>Error Message</button>    
        <button  className="btn btn-warning btnspace" onClick={()=>toast.warning('Success Message')}>Warning Message</button>    
        <ToastContainer />    
      </div>    
        </>
    )
} export default Userprofilecomponent;