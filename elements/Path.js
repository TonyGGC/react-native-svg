import React from "react";
import { requireNativeComponent } from "react-native";
import extractProps from "../lib/extract/extractProps";
import Shape from "./Shape";

export default class Path extends Shape {
    static displayName = "Path";

    render() {
        const { props } = this;
        return (
            <RNSVGPath
                ref={this.refMethod}
                {...extractProps(props, this)}
                d={props.d}
            />
        );
    }
}

const RNSVGPath = requireNativeComponent("RNSVGPath");
