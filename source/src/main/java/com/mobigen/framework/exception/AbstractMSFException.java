package com.mobigen.framework.exception;

import lombok.Getter;

class AbstractMSFException extends Exception {
	@Getter
	private final String exceptionMessage;

	public AbstractMSFException() {
		this.exceptionMessage = "";
	}

	public AbstractMSFException(String exceptionMessage) {
		this.exceptionMessage = exceptionMessage;
	}

	public AbstractMSFException(String exceptionMessage, Throwable e) {
		this.exceptionMessage = exceptionMessage;
		this.initCause(e);
	}
}
