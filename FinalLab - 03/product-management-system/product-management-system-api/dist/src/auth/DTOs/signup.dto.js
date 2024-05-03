"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDTO = void 0;
const class_validator_1 = require("class-validator");
class SignUpDTO {
}
exports.SignUpDTO = SignUpDTO;
__decorate([
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], SignUpDTO.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], SignUpDTO.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    (0, class_validator_1.MaxLength)(15),
    (0, class_validator_1.MinLength)(11),
    __metadata("design:type", String)
], SignUpDTO.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignUpDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(8),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], SignUpDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(8),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], SignUpDTO.prototype, "confirmPassword", void 0);
//# sourceMappingURL=signup.dto.js.map