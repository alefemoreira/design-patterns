export interface Observer {
  update(data: Any): void;
}

export interface Subject {
  observers: Observer[];

  subscribe(observer: Observer): boolean;
  unsubscribe(observer: Observer): boolean;
  notify(): void;
}
