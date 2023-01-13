import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();

const myname = config.require('myname');
const mysecret = config.requireSecret('mysecret');

const optionalParam = config.get('optional') || 'defaultValue';

export const name = myname;
export const secret = mysecret;