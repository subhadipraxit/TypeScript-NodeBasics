import {Person} from "./Person";
import * as _ from "lodash";

var aPerson : Person = new Person();
aPerson.firstName = "TestFirstName";
aPerson.lastName = "TestLastName";
console.log(aPerson);
console.log(aPerson.firstName+ " " + aPerson.lastName);
var arr = [11, 22, 33, 44, 55];
console.log(_.reverse(arr));
