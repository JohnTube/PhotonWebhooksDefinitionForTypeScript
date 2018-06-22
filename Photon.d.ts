declare namespace Photon {
    enum LobbyType {
        Default = 0,
        SqlLobby = 2,
        AsyncRandomLobby = 3
    }
    enum LeaveReason {
        ClientDisconnect = 0,
        ClientTimeoutDisconnect = 1,
        ManagedDisconnect = 2,
        ServerDisconnect = 3,
        TimeoutDisconnect = 4,
        ConnectTimeout = 5,
        SwitchRoom = 100,
        LeaveRequest = 101,
        PlayerTtlTimedOut = 102,
        PeerLastTouchTimedout = 103,
        PluginRequest = 104,
        PluginFailedJoin = 105
    }
    type RegionCode = "eu"
        | "us"
        | "usw"
        | "jp"
        | "asia"
        | "au"
        | "cae"
        | "cn"
        | "in"
        | "ru"
        | "rue"
        | "kr"
        | "sa";
    type PathCreateType = "Create"
        | "Load";
    type PathCloseType = "Close"
        | "Save";
    type PathPropertiesType = "Game"
        | "Actor";
    type PathLeaveType = "ClientDisconnect"
        | "ClientTimeoutDisconnect"
        | "ManagedDisconnect"
        | "ServerDisconnect"
        | "TimeoutDisconnect"
        | "ConnectTimeout"
        | "SwitchRoom"
        | "LeaveRequest"
        | "PlayerTtlTimedOut"
        | "PeerLastTouchTimedout"
        | "PluginRequest"
        | "PluginFailedJoin";
    interface SerializableActor {
        ActorNr: number,
        UserId: string,
        Nickname: string,
        Binary: string,
        IsActive?: boolean,
        DEBUG_BINARY: { "1": { string: any } },
        DeactivationTime?: string
    }
    enum RemoveActorReason {
        Kick,
        Banned
    }
    interface ExcludedActor {
        UserId: string,
        Reason: RemoveActorReason
    }
    interface BinaryState {
        "18"?: string,
        "19"?: string,
        "20"?: string
    }
    interface DebugInfo {
        DEBUG_PROPERTIES_18: any,
        DEBUG_EVENTS_19: any,
        DEBUG_GROUPS_20: any
    }
    interface SerializableState {
        ActorCounter: number,
        ActorList: SerializableActor[],
        Binary: BinaryState,
        CheckUserOnJoin: boolean,
        CustomProperties: { [key: string]: any },
        DeleteCacheOnLeave: boolean,
        EmptyRoomTTL: number,
        IsOpen: boolean,
        IsVisible: boolean,
        LobbyId?: string,
        LobbyType: LobbyType,
        LobbyProperties: string[],
        MaxPlayers: number,
        PlayerTTL: number,
        SuppressRoomEvents: boolean,
        Slice: number,
        DebugInfo: DebugInfo,
        PublishUserId: boolean,
        ExcludedActors: ExcludedActor[],
        ExpectedUsers: string[],
        RoomFlags: number
    }
    interface ExpectedWebHooksResponse {
        ResultCode: number,
        Message?: string
    }
    interface ExpectedWebRpcResponse {
        ResultCode: number,
        Message?: string,
        Data?: object
    }
    interface ExpectedPathCreateResponse {
        ResultCode: number,
        Message?: string,
        State?: SerializableState
    }
    interface CreateOptions {
        MaxPlayers: number,
        LobbyId: string,
        LobbyType: LobbyType
        CustomProperties: { [key: string]: any },
        EmptyRoomTTL: number,
        PlayerTTL: number,
        CheckUserOnJoin: boolean,
        DeleteCacheOnLeave: boolean,
        SuppressRoomEvents: boolean,
        ExpectedUsers: string[]
    }
    interface PathCreateArguments {
        AppId: string,
        AppVersion: string,
        Region: RegionCode,
        GameId: string,
        Type: PathCreateType,
        ActorNr: number,
        UserId: string,
        Nickname: string,
        CreateOptions: CreateOptions,
        CreateIfNotExists?: boolean
    }
    interface PathCloseArguments {
        AppId: string,
        AppVersion: string,
        Region: RegionCode,
        GameId: string,
        Type: PathCloseType,
        State?: SerializableState,
        ActorCount: number
    }
    interface PathJoinArguments {
        AppId: string,
        AppVersion: string,
        Region: RegionCode,
        GameId: string,
        Type: "Join",
        ActorNr: number,
        UserId: string,
        Nickname: string,
    }
    interface PathLeaveArguments {
        AppId: string,
        AppVersion: string,
        Region: RegionCode,
        GameId: string,
        Type: PathLeaveType,
        ActorNr: number,
        UserId: string,
        Nickname: string,
        Reason: LeaveReason,
        IsInactive: boolean
    }
    interface PathEventArguments {
        AppId: string,
        AppVersion: string,
        Region: RegionCode,
        GameId: string,
        Type: "Event",
        ActorNr: number,
        UserId: string,
        Nickname: string,
        EvCode: number,
        Data: any,
        AuthCookie?: any,
        State?: SerializableState
    }
    interface PathPropertiesArguments {
        AppId: string,
        AppVersion: string,
        Region: RegionCode,
        GameId: string,
        Type: PathPropertiesType,
        ActorNr: number,
        UserId: string,
        Nickname: string,
        Properties: { [key: string]: any },
        AuthCookie?: any,
        State?: SerializableState,
        TargetActor?: number
    }
}