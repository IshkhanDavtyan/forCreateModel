import React, { Component } from 'react'

export default class Field extends Component {


handleClick = ()=>{
let newObj = {}
    for(let i = 0;i<this.props.count;i++){
        
        
        
    }
    fetch()
}

    render() {
        const fieldParams = ["name", "type", "required"]

      let field = []
            for (let i = 0; i < this.props.count; i++) {
                field.push(
                    <div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{fieldParams[0]}</label>
                        <input type="text" className="form-control name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{fieldParams[1]}</label>
                        <input type="text" className="form-control type" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{fieldParams[2]}</label>
                        <input type="text" className="form-control required" />
                    </div>
                    <hr/>
                    </div>
            )
            
        }
        console.log(this.props.count)
        return (
            <div>
                {field}
                <button className="btn btn-success" onClick={}>success</button>
            </div>
        )
    }
}