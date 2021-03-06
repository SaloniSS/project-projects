import React, { Component } from "react";
import './Form.scss';

import Field from "../components/Field";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import CheckInputList from "../components/CheckInputList";
import Check from "../types/Check";
import SubmitButton from "../components/SubmitButton";
import OurFormData from "../types/OurFormData";

type FormProps = {
    projects: string[];
    roles: string[];
    interests: Check[];
    onSubmit: any;
};

class Form extends Component<FormProps> {
    handleSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const sendData: OurFormData = {
            id: formData.get('id')?.toString() || '',
            project: formData.get('project')?.toString() || '',
            role: formData.get('role')?.toString() || '',
            interests: formData.getAll('interests')?.map((x) => x.toString()) || [],
        };
        this.props.onSubmit(sendData);
    };
    render = () => {
        return (
            <form className='form' onSubmit={ this.handleSubmit } >
                <Field text='What is your employee ID?' icon='name.svg'>
                    <TextInput internalName='id' />
                </Field>
                <Field text='What project are you working on?' icon='writing.svg'>
                    <SelectInput options={ this.props.projects } internalName='project' />
                </Field>
                <Field text='What is your role in the project?' icon='group.svg'>
                    <SelectInput options={ this.props.roles } internalName='role' />
                </Field>
                <Field text='What do you want to learn?' icon='idea.svg'>
                    <CheckInputList options={ this.props.interests } internalName='interests' />
                </Field>
                <div className='submit-container'>
                    <SubmitButton/>
                </div>
            </form>
        );
    };
}

export default Form;