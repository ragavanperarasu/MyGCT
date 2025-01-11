export type RootStackParamList = {
  Home: undefined;
  StudentHome: undefined;
  Details: undefined;
  TeacherHome: undefined;
  RegSel:{reqType : string};
  DepSel:{reqType : string, regType : string};
  SemSel:{reqType : string, regType : string , depType : string, dep : string};
  SubShow:{reqType : string, regType : string , depType : string, semType : string};
};